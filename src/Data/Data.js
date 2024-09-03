// Sidebar Data
export const SidebarData = [
  {
    heading: "1st Generation",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
  },
  {
    heading: "2nd Generation",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
  },
  {
    heading: "3rd Generation",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
  },
  {
    heading: '4th Generation',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
  },
  {
    heading: '5th Generation',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
  },
];

// Types Colors Data

export const makeStyle = (type) => {
  switch (type) {
    case "normal":
      return {
        background: "#c7c2ba",
        color: "white",
      };
    case "fire":
      return {
        background: "#e83a0b",
        color: "white",
      };
    case "water":
      return {
        background: "#3391f0",
        color: "white",
      };
    case "grass":
      return {
        background: "#6abd2f",
        color: "white",
      };
    case "electric":
      return {
        background: "#fcb917",
        color: "white",
      };
    case "ice":
      return {
        background: "#6cd3f5",
        color: "white",
      };
    case "fighting":
      return {
        background: "#773722",
        color: "white",
      };
    case "poison":
      return {
        background: "#8e4192",
        color: "white",
      };
    case "ground":
      return {
        background: "#d1b057",
        color: "white",
      };
    case "flying":
      return {
        background: "#8a9fef",
        color: "white",
      };
    case "psychic":
      return {
        background: "#ec457e",
        color: "white",
      };
    case "bug":
      return {
        background: "#a6b61c",
        color: "white",
      };
    case "rock":
      return {
        background: "#b59e54",
        color: "white",
      };
    case "ghost":
      return {
        background: "#5d5fb2",
        color: "white",
      };
    case "dragon":
      return {
        background: "#7763df",
        color: "white",
      };
    case "dark":
      return {
        background: "#4f3a2d",
        color: "white",
      };
    case "steel":
      return {
        background: "#b3b3c1",
        color: "white",
      };
    case "fairy":
      return {
        background: "#f3b4f3",
        color: "white",
      };
    default:
      break;
  }
};

// Type Colors Shadows

export const Colors = [
  {
    name: "normal",
    color: {
      backGround: "linear-gradient(180deg, #c7c2ba 0%, #dbd7d0 100%)",
      boxShadow: "0px 10px 20px 0px #f5f1eb",
    },
  },
  {
    name: "fighting",
    color: {
      backGround: "linear-gradient(180deg, #773722 0%, #734536 100%)",
      boxShadow: "0px 10px 20px 0px #755b52",
    },
  },
  {
    name: "flying",
    color: {
      backGround: "linear-gradient(180deg, #8a9fef 0%, #a9b7eb 100%)",
      boxShadow: "0px 10px 20px 0px #c1c9e8",
    },
  },
  {
    name: "poison",
    color: {
      backGround: "linear-gradient(180deg, #8e4192 0%, #8c548f 100%)",
      boxShadow: "0px 10px 20px 0px #8a688c",
    },
  },
  {
    name: "ground",
    color: {
      backGround: "linear-gradient(180deg, #d1b057 0%, #ccb576 100%)",
      boxShadow: "0px 10px 20px 0px #c7ba95",
    },
  },
  {
    name: "rock",
    color: {
      backGround: "linear-gradient(180deg, #b59e54 0%, #b3a26d 100%)",
      boxShadow: "0px 10px 20px 0px #ada384",
    },
  },
  {
    name: "bug",
    color: {
      backGround: "linear-gradient(180deg, #a6b61c 0%, #a7b347 100%)",
      boxShadow: "0px 10px 20px 0px #a3ab65",
    },
  },
  {
    name: "ghost",
    color: {
      backGround: "linear-gradient(180deg, #5d5fb2 0%, #797bad 100%)",
      boxShadow: "0px 10px 20px 0px #9091ab",
    },
  },
  {
    name: "steel",
    color: {
      backGround: "linear-gradient(180deg, #b3b3c1 0%, #d3d3e0 100%)",
      boxShadow: "0px 10px 20px 0px #e4e4f7",
    },
  },
  {
    name: "fire",
    color: {
      backGround: "linear-gradient(180deg, #e83a0b 0%, #e66340 100%)",
      boxShadow: "0px 10px 20px 0px #e08a72",
    },
  },
  {
    name: "water",
    color: {
      backGround: "linear-gradient(180deg, #3391f0 0%, #6baced 100%)",
      boxShadow: "0px 10px 20px 0px #9dc4eb",
    },
  },
  {
    name: "grass",
    color: {
      backGround: "linear-gradient(180deg, #6abd2f 0%, #80b55b 100%)",
      boxShadow: "0px 10px 20px 0px #94b080",
    },
  },
  {
    name: "electric",
    color: {
      backGround: "linear-gradient(180deg, #fcb917 0%, #edc461 100%)",
      boxShadow: "0px 10px 20px 0px #e6cd91",
    },
  },
  {
    name: "psychic",
    color: {
      backGround: "linear-gradient(180deg, #ec457e 0%, #e67ca0 100%)",
      boxShadow: "0px 10px 20px 0px #d9a0b4",
    },
  },
  {
    name: "ice",
    color: {
      backGround: "linear-gradient(180deg, #6cd3f5 0%, #9fdaed 100%)",
      boxShadow: "0px 10px 20px 0px #b4d4de",
    },
  },
  {
    name: "dragon",
    color: {
      backGround: "linear-gradient(180deg, #7763df 0%, #968ad4 100%)",
      boxShadow: "0px 10px 20px 0px #a59fc4",
    },
  },
  {
    name: "dark",
    color: {
      backGround: "linear-gradient(180deg, #4f3a2d 0%, #806f65 100%)",
      boxShadow: "0px 10px 20px 0px #9e948e",
    },
  },
  {
    name: "fairy",
    color: {
      backGround: "linear-gradient(180deg, #f3b4f3 0%, #e6c3e6 100%)",
      boxShadow: "0px 10px 20px 0px #e0d7e0",
    },
  },
  {
    name: "stellar",
    color: {
      backGround: "linear-gradient(180deg, #dab4f3 0%, #dac3e6 100%)",
      boxShadow: "0px 10px 20px 0px #e0d7e0",
    },
  },
];

// Fun Facts Data
export const funFactsList = [
  {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    text1: "Arcanine was originally meant to be a legendary pokemon.",
    text2: "The original concept paired it with the two legendary birds, Articuno and Zapdos. However, the idea was later scrapped and Moltres was made to complete the trio. ",
  },
  {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    text1: "Poliwag is based on a real animal.",
    text2: "It is based on a kind of tadpole with a translucent stomach. The spiral on the Pokemon stomach is meant to represent the intestines of the tadpoles in real life. ",
  },
  {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    text1: "Zubat does not have any eyes.",
    text2: "Zubat is a bat Pokemon that relies on echolocation much like a real bat. They are normally found in caves or dark areas where they remain silent until sundown. "
  },
];
