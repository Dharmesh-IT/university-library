import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSVG";
type BookCoverVariant = "extraSmall" | "Small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  Small: "book-cover_small",
  medium: "book-medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  classname?: string;
  variant: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}
const BookCover = ({
  classname,
  variant? = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/200x200.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        classname
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "87.5%" }}
      >
        <Image
          src={coverImage}
          alt="book"
          fill
          objectFit="cover"
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
