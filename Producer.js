const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  outout: process.stdout,
});

async function init() {
  const producer = kafka.producer();
  console.log("producer connecting");
  await producer.connect();
  console.log("producer connection successful ");
  rl.setPrompt(">");
  rl.prompt();

  rl.on("line", async () => {
    const [rider, location] = line.split(" ");
  });
  await producer.send({
    topic: "Rider-Updates",
    messages: [
      {
        partition: 0,
        key: "location-updates",
        value: JSON.stringify({
          name: "Navjot singh",
          id: "1120",
          latitude: 11234,
          longitude: 1234.132,
        }),
      },
    ],
  });
  console.log("Message sent successfully");
  await producer.disconnect();
}
init();
