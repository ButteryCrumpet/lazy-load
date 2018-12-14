import "intersection-observer";

const callback: IntersectionObserverCallback
  = (entries, observer )=> {
    entries
      .filter(entry => entry.isIntersecting)
      .forEach(entry => {
        const src = entry.target.getAttribute("data-src")
        if (src) {
          entry.target.setAttribute("src", src)
          entry.target.removeAttribute("data-src")
          console.log(src)
        }
        observer.unobserve(entry.target)
    });
  }

const observer = new IntersectionObserver(callback, {threshold: 0.5})
const images = [].slice.call(document.querySelectorAll("img[data-src]"))
images.forEach((img: Element) => observer.observe(img))