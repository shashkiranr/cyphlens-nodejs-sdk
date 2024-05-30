type ImageType = 'SVG' | 'SVG_DECODED' | 'PNG';
interface ImageInfo {
    sessionId: string;
    imageType: ImageType;
    image: string;
    username: string;
}
export { ImageType, ImageInfo };
