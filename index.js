const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  admin.connect();
  console.log("Addmin connection successful ");
  await admin.createTopics({
    topics: [
      {
        topic: "Rider-Updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created successfully");
  await admin.disconnect();
}
init();
