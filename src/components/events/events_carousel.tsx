"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute rounded-full",
        "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12",
        orientation === "horizontal"
          ? "-left-4 sm:-left-6 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2"
          : "-top-4 sm:-top-6 md:-top-8 lg:-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute rounded-full",
        "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12",
        orientation === "horizontal"
          ? "-right-4 sm:-right-6 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselThumbnails: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [thumbnails, setThumbnails] = React.useState<Array<{ src: string; alt: string }>>([])
  const thumbnailsContainerRef = React.useRef<HTMLDivElement>(null)

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!api) return
      api.scrollTo(index)
      
      // Scroll thumbnails container when clicking first or last visible thumbnail
      if (thumbnailsContainerRef.current) {
        const container = thumbnailsContainerRef.current
        const thumbnailButtons = container.querySelectorAll('button')
        const clickedButton = thumbnailButtons[index]
        
        if (clickedButton) {
          const containerRect = container.getBoundingClientRect()
          const buttonRect = clickedButton.getBoundingClientRect()
          
          // Check if clicked button is at the start or end of visible area
          const isAtStart = buttonRect.left <= containerRect.left + 20
          const isAtEnd = buttonRect.right >= containerRect.right - 20
          
          if (isAtStart && index > 0) {
            // Scroll left to show previous thumbnails
            container.scrollBy({ left: -container.clientWidth * 0.5, behavior: 'smooth' })
          } else if (isAtEnd && index < thumbnails.length - 1) {
            // Scroll right to show next thumbnails
            container.scrollBy({ left: container.clientWidth * 0.5, behavior: 'smooth' })
          }
        }
      }
    },
    [api, thumbnails.length]
  )

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api?.off("select", onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api) return

    const extractThumbnails = () => {
      const slideNodes = api.slideNodes()
      if (!slideNodes) return

      const extractedThumbnails: Array<{ src: string; alt: string }> = []
      
      slideNodes.forEach((slide: Element, index: number) => {
        const img = slide.querySelector('img')
        if (img) {
          extractedThumbnails.push({
            src: img.src,
            alt: img.alt || `Slide ${index + 1}`
          })
        }
      })

      setThumbnails(extractedThumbnails)
    }

    // Extract thumbnails after carousel is ready
    const timer = setTimeout(extractThumbnails, 100)
    
    return () => clearTimeout(timer)
  }, [api])

  if (thumbnails.length === 0) {
    return null
  }

  return (
    <div
      ref={thumbnailsContainerRef}
      className={cn(
        "mt-8 flex w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory p-2 sm:p-4 py-8 sm:py-12 md:py-16",
        className
      )}
      {...props}
    >
      {thumbnails.map((thumb, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "relative aspect-video flex-shrink-0 rounded-[20px] transition-all duration-200 hover:scale-105",
            "w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)]",
            "min-w-[calc(50%-0.5rem)] sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1.5rem)]",
            selectedIndex === index
              ? "border-primary ring-2 ring-primary/20"
              : "border-border "
          )}
          onClick={() => onThumbClick(index)}
        >
          <img
            src={thumb.src}
            alt={thumb.alt}
            className="h-full w-full rounded-[20px] object-cover"
          />
          <div className="absolute inset-0 rounded-[20px] bg-black/0 transition-colors hover:bg-black/10" />
        </button>
      ))}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselThumbnails,
}
