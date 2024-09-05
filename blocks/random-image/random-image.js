export default function decorate(block) {
  const images = Array.from(block.children);
  if (images.length > 0) {
    // Select a random index from the children array
    const randomIndex = Math.floor(Math.random() * images.length);
    // Remove all other children except the selected one
    images.forEach((child, index) => {
      if (index !== randomIndex) {
        block.removeChild(child);
      }
    });
  }
}
