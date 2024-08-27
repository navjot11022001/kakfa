const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  console.log("consumer connecting");
  await consumer.connect();
  console.log("consumer connection successful ");
  await consumer.subscribe({
    topics: ["Rider-Updates"],
    fromBeginning: true,
  });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `Topic: ${topic} Partition: ${partition}`,
        message.value.toString()
      );
    },
  });
}
init();
