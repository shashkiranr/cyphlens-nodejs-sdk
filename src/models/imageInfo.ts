type ImageType = 'SVG' | 'SVG_DECODED' | 'PNG'

/**
 * Describes a image info response
 */
interface ImageInfo {
    sessionId: string,
    imageType: ImageType,
    image: string,
    username: string,
}

export {
    ImageType,
    ImageInfo
}