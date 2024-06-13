let nftCount = 0;
let nftArray = [];

function mintNFT(name, artist, description) {
  let nft = {
    name: name,
    artist: artist,
    description: description
  };

  nftCount++;
  nftArray.push(nft);
  return nft;
}

function listNFTs() {
  nftArray.forEach(nft => {
    console.log("Name: " + nft.name);
    console.log("Artist: " + nft.artist);
    console.log("Description: " + nft.description);
    console.log("***************");
  });
}

function getTotalSupply() {
  return nftCount;
}

let nft1 = mintNFT("Rahul", "Artist1", "Hello, this is my first nft");
let nft2 = mintNFT("Ram", "Artist2", "Hello, this is my second nft");

listNFTs();
console.log("Total nft's supply: " + getTotalSupply());
