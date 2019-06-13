const fs = require('fs')
const download = require('download')
const videos = require('./videos')

const OUTPUT_DIR = 'Downloads'

const main = async () => {
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i]
    const data = await download(video.url)
    fs.writeFileSync(
      `${OUTPUT_DIR}/${video.name.replace(/[\/\\:]/g, '_')}.mp4`,
      data,
    )
    console.log(`Downloaded file ${i + 1} of ${videos.length} (${video.name})`)
  }
}

fs.mkdir(OUTPUT_DIR, () => {
  main()
})
