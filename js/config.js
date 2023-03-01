var config = {
  style: "mapbox://styles/mapbox/streets-v12",
  accessToken:
    "pk.eyJ1IjoicGl1c2dhYnVsYSIsImEiOiJjbGUyaWdhc2oxbjZlM29wNnppMTl5YzlyIn0.5-v9ntx9DtfOruS7Hpgn2w",
  showMarkers: true,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "YouthMappers Chapters in Uganda",
  subtitle: "We don't just build maps. We build mappers ",
  byline: "",
  footer:
    'Created by <a href="https://mapuganda.org" target="_blank">OpenstreetMap Uganda</a>.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "Youthmappers",
      image:
        "https://live.staticflickr.com/65535/52699159852_a3e2f2033f_q.jpg",
      description:
        "<p>YouthMappers is an international network of university-student-led chapters that was created in 2014 and launched on Capitol Hill in November 2015.The organization's goal is to produce the next generation of leaders and build resilient communities by giving young people the tools they need to define and transform their own worlds through mapping. Chapters of YouthMappers plan, work together, and carry out mapping initiatives that address global development issues in real time, using geospatial data and information that is made available to the public through open platforms. A global community of students, researchers, teachers, and academics known as YouthMappers uses free geographic data to directly address globally framed development concerns..</p> ",
      location: {
        center: [32.5944272, 0.3418314],
        zoom: 5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "Geo Youthamppers, Makerere University",
      image:
        "https://live.staticflickr.com/65535/52700139870_a0a69bc16f_q.jpg",
      description:
        "A mapping group located at Makerere University known for translating spatial thinking into practical applications is called Geo YouthMappers. With OSM, we have worked together on a number of mapping initiatives. Our primary goal is to streamline data and make it easily accessible, primarily for disaster planning. 'We map the planet and transform life.' ",

      location: {
        center: [32.5686, 0.3326],
        zoom: 10,
        pitch: 60,
        bearing: -43.2,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "Good Mappers, Busitema University",
      image:
        "https://live.staticflickr.com/65535/52700251758_e249581b56_q.jpg",
      description:
        "Good mappers is a team of students in Busitema University. Its main objective is to create a community of experienced mappers who can contribute to the world map.",
      location: {
        center: [34.0200, 0.5453],
        zoom: 17,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-identifier",
      alignment: "right",
      hidden: false,
      title: "CSGU Mappers, Gulu University",
      image:
        "https://live.staticflickr.com/65535/52700274044_537fa4eac3_q.jpg",
      description:
        "The computing society at Gulu University is known as the CSGU Mappers. Beyond anyone's wildest dreams, this chapter is imaginative, passionate, inventive, and prepared to map both Uganda and the entire world.",
      location: {
        center: [32.3169, 2.7881],
        zoom: 16,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fifth-identifier",
      alignment: "left",
      hidden: false,
      title: "HiTech Youth Mappers, Uganda Pentecostal University",
      image:
        "https://live.staticflickr.com/65535/52706234908_b7757870d8_q.jpg",
      description:
        "A new Youthmappers Chapter in Western Uganda. Ready to map and provide open data with OpenStreetMap for development purposes.",
      location: {
        center: [30.2662, 0.6620],
        zoom: 17,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "sixth-identifier",
      alignment: "right",
      hidden: false,
      title: "Muni University YouthMappers Chapter (MUYMC)",
      image:
        "https://live.staticflickr.com/65535/52719190949_f98f3b6deb_q.jpg",
      description:
        "They are still an informal group of students with interests in Mapping, Cartography, GIS and Remote Sensing.",
      location: {
        center: [30.9268, 2.9962],
        zoom: 17,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "seveth-identifier",
      alignment: "left",
      hidden: false,
      title: "Luac YouthMappers, Lira University",
      image:
        "https://live.staticflickr.com/65535/52719199409_385f40017a_q.jpg",
      description:
        "Luac Youth Mappers chapter is a student chapter that gathers students from different faculties and areas of profession to train together and expertise on how to become mappers and develop their communities and the nation in particular.",
      location: {
        center: [32.8210, 2.2510],
        zoom: 15,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "eighth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Conclusion",
      image:
        "https://live.staticflickr.com/65535/52699830281_27175b0e53_q.jpg",
      description:
        "YouthMappers has significantly impacted Uganda through a number of mapping initiatives and chapters. Uganda Water Infrastructure Mapping Project U-WIMP is one noteworthy project that was started by the YouthMappers Chapter at Gulu University in collaboration with YouthMappers, West Virginia University, the Water Point Data Exchange (WPdx), and the U.S. Agency for International Development (USAID) . The U-WIMP initiative aims to train local people and students in mapping techniques, as well as map and monitor Uganda's water infrastructure.Uganda has one of the largest numbers of YouthMappers chapters per country, with a majority located in Eastern Uganda (Busia, Mbale, and Kumi) and two dispersed in Kampala and Gulu. These chapters are university-student led. After a student mapped more than 80,000 edits for a group project located in the Bidibidi refugee camps in northern Uganda, Chad Blevins, director of the Mapping for Resilience Program in the USAID GeoCenter, paid particular attention to the impact of YouthMappers in Uganda. Additionally, with assistance from the USAID GeoCenter and HOT, Makerere University's YouthMappers chapter, Geo YouthMappers, is mapping COVID-19 hotspot regions at Ugandan border crossing sites. Their effort benefits international and nonprofit groups battling the pandemic.The greatest editing has taken place in Uganda, Zimbabwe, and Mali among all African nations, while contributions to YouthMappers features by nation from 2016 to 2022 are considerable in Western African and Eastern African nations.",
      location: {
        center: [32.5944272, 0.3418314],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
