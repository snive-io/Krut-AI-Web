import ProductStudio from '../assets/Gif/Product Studio.mp4'
import ModelStudio from '../assets/Gif/Model Studio.mp4'
import BgRemove from '../assets/Gif/background Remover.mp4'
import Upscaler from '../assets/Gif/Scaler.mp4'
import MagicRemove from '../assets/Gif/Magic removal.mp4'
import MagicReplace from '../assets/Gif/Magic Replace.mp4'
import Outpaint from '../assets/Gif/Outpaint.mp4'
import BrRemovetn from '../assets/Images/bg_remove.webp'
import Upscalertn from "../assets/Images/upscale1.jpg"
import MagivRemovetn from "../assets/Images/remove anything0.jpg"
import MagicReplacetn from "../assets/Images/replace00.jpg"
import Outpainttn from "../assets/Images/outpaintt0.jpg"
import ModelStudiotn from "../assets/Images/model studio new0.jpg"
import ProductStudiotn from "../assets/Images/new product studio00.jpg"
// import Toolsbg from "../assets/Images/luxa.org-opacity-changed-toolsbgg.jpeg"
import virtualTryOn from "/images/tryOn_thumbnail.webp"

const cardData = [
  {
    title: "Product Studio",
    description: "Create visually appealing product photoshoots in seconds",
    gif: ProductStudio,
    thumbnail: ProductStudiotn,
    video: ProductStudio,
    beforeImg: "/images/productStudio_before.webp",
    afterImg: "/images/productStudio_after.webp",
    link: "/tools?tool=Product%20Studio",
  },
  {
    title: "Model Studio",
    description: "Optimize your ads with human model images, saving cost & time",
    gif: ModelStudio,
    thumbnail: ModelStudiotn,
    video: ModelStudio,
    beforeImg: "/images/modelStudio_before.webp",
    afterImg: "/images/modelStudio_after.webp",
    link: "/tools?tool=Model%20Studio",
  },
  {
    title: "Background Remover",
    description: "Instantly remove background with AI precision in seconds with automatic image recognition",
    gif: BgRemove,
    thumbnail: BrRemovetn,
    video: BgRemove,
    beforeImg: "/images/bgRemove_before.webp",
    afterImg: "/images/bgRemove_after.webp",
    link: "/tools?tool=Background%20remover",
  },
  {
    title: "Upscaler",
    description: "Instantly scale ANY image to 4K clarity with a click using AI precision",
    gif: Upscaler,
    thumbnail: Upscalertn,
    video: Upscaler,
    beforeImg: "/images/upscaler_before.webp",
    afterImg: "/images/upscaler_after.webp",
    link: "/tools?tool=Upscaler",
  },
  {
    title: "Magic Remove",
    description: "Eliminate unwanted objects and fix imperfections instantly and accurately",
    gif: MagicRemove,
    thumbnail: MagivRemovetn,
    video: MagicRemove,
    beforeImg: "/images/remove_before.webp",
    afterImg: "/images/remove_after.webp",
    link: "/tools?tool=Magic%20Remove",
  },
  {
    title: "Magic Replace",
    description: "Swap unwanted objects effortlessly with pixels perfect clarity",
    gif: MagicReplace,
    thumbnail: MagicReplacetn,
    video: MagicReplace,
    beforeImg: "/images/replace_before.webp",
    afterImg: "/images/replace_after.webp",
    link: "/tools?tool=Magic%20Replace",
  },
  {
    title: "Autofill",
    description: "Extend existing images to your desired specifications",
    gif: Outpaint,
    thumbnail: Outpainttn,
    video: Outpaint,
    beforeImg: "/images/autofill_before.webp",
    afterImg: "/images/autofill_after.webp",
    link: "/tools?tool=Autofill",
  },
  {
    title: "Virtual Try-On",
    description: "Try on glasses, outfits, and more in real-time online before buying with Krut AI",
    gif: null,
    thumbnail: virtualTryOn,
    video: null,
    beforeImg: "/images/tryOn_before.webp",
    afterImg: "/images/tryOn_after.webp",
    link: "/tools?tool=Virtual%20Try-On",
  },
];


export default cardData;
