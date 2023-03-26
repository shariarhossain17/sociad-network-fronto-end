import Image from "next/image";

const ImageSlide = ({img}) => {
    return (
        <div>
            <Image width={60} src={img} alt="img"></Image>
        </div>
    );
};

export default ImageSlide;