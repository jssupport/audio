export default function getAudioBuffer (audioCtx, blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = async (e) => {
      const arrayBuffer = e.target.result
      audioCtx.decodeAudioData(arrayBuffer, resolve, reject)
    }
    fileReader.readAsArrayBuffer(blob)
  })
}
