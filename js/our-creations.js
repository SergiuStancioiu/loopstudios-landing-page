async function getData() {
  const url = 'public/data.json';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const creations = result.creations;

    for (const creation of creations) {
      creationCard(creation);
    }
  } catch (error) {
    console.error(error.message);
  }
}

getData();

function creationCard(creation) {
  const container = document.querySelector('.our-creations');
  const template = document.querySelector('.creation-template');

  const clone = template.content.cloneNode(true);

  // select picture elements
  const source = clone.querySelector('source');
  const img = clone.querySelector('.creation-image');

  // set responsive images
  source.srcset = `images/mobile/${creation.mobile_image}.jpg`;
  img.src = `images/desktop/${creation.mobile_image}.jpg`;

  // set title
  clone.querySelector('.creation-title').innerText = creation.title;

  container.appendChild(clone);
}
