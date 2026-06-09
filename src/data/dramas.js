import myNameImg from "../assets/images/myNameImg.jpg"
import loveScoutImg from "../assets/images/loveScoutImg.jpg"
import studyGroupImg from "../assets/images/studyGroupImg.jpg"
import crashLandingImg from "../assets/images/crashLandingImg.jpg"
import businessProposalImg from "../assets/images/businessProposalImg.jpg"
import vincenzoImg from "../assets/images/vincenzoImg.jpg"
const dramas = [
  {
    id: 1,
    title: "My Name",
    genre: ["Crime", "Thriller"],
    rating: 9.0,
    year: 2021,
    episodes: 8,
    cast: ["Han So-hee", "Park Hee-soon"],
    description:
      "A woman joins a crime syndicate and infiltrates the police to uncover the truth behind her father's death.",
    
    image: myNameImg
  },

  {
    id: 2,
    title: "Love Scout",
    genre: ["Romance", "Comedy"],
    rating: 8.7,
    year: 2025,
    episodes: 12,
    cast: ["Han Ji-min", "Lee Jun-hyuk"],
    description:
      "A heartwarming romance between a successful executive and her dependable secretary as they navigate work and love.",
    
    image:loveScoutImg
  },

  {
    id: 3,
    title: "Study Group",
    genre: ["Action", "School"],
    rating: 8.9,
    year: 2025,
    episodes: 10,
    cast: ["Hwang Min-hyun", "Han Ji-eun"],
    description:
      "A student forms a study group to improve academically while fighting against school violence and injustice.",
    
    image:studyGroupImg 
  },

  {
    id: 4,
    title: "Crash Landing on You",
    genre: ["Romance", "Drama"],
    rating: 9.5,
    year: 2019,
    episodes: 16,
    cast: ["Hyun Bin", "Son Ye-jin"],
    description:
      "A South Korean heiress accidentally lands in North Korea and falls in love with a North Korean army officer.",
    
    image:crashLandingImg
  },

  {
    id: 5,
    title: "Business Proposal",
    genre: ["Romance", "Comedy"],
    rating: 8.8,
    year: 2022,
    episodes: 12,
    cast: ["Ahn Hyo-seop", "Kim Se-jeong"],
    description:
      "A woman goes on a blind date pretending to be her friend and unexpectedly meets her company's CEO.",
    
    image:businessProposalImg
  },

  {
    id: 6,
    title: "Vincenzo",
    genre: ["Crime", "Comedy", "Action"],
    rating: 9.3,
    year: 2021,
    episodes: 20,
    cast: ["Song Joong-ki", "Jeon Yeo-been"],
    description:
      "A Korean-Italian mafia lawyer returns to Korea and takes on powerful villains using unconventional methods.",
  
    image:vincenzoImg
  }
]

export default dramas

