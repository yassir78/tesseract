let createWorker  = require('tesseract.js').createWorker;

const worker = createWorker({});

(async () => {
  await worker.load();
  await worker.loadLanguage('fra');
  await worker.initialize('fra');
  const { data: { text } } = await worker.recognize('./1.png');
  console.log(text);
  await worker.terminate();
})();