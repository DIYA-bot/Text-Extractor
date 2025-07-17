
    const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');
    const output = document.getElementById('output');
    const manualInput = document.getElementById('manualInput');
    let imageFile;
    imageInput.addEventListener('change', (e) => {
      imageFile = e.target.files[0];
      if (imageFile) {
        preview.src = URL.createObjectURL(imageFile);
      }
    });

function extractText() {
  if (!imageFile) {
    alert("Please upload an image first.");
    return;
  }

  document.getElementById('outputSection').style.display = 'block';
  output.value = "⏳ Extracting text from image...";
  Tesseract.recognize(
    imageFile,
    'eng',
    {
      logger: m => console.log(m)
    }
  ).then(({ data: { text } }) => {
    output.value = text;
  }).catch(err => {
    output.value = "❌ Error: " + err.message;
  });
}
