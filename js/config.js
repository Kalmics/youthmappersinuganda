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
        "<p>YouthMappers is an international network of university-student-led chapters that was created in 2014 and launched on Capitol Hill in November 2015.The organization's goal is to produce the next generation of leaders and build resilient communities by giving young people the tools they need to define and transform their own worlds through mapping. Chapters of YouthMappers plan, work together, and carry out mapping initiatives that address global development issues in real time, using geospatial data and information that is made available to the public through open platforms. A global community of students, researchers, teachers, and academics known as YouthMappers uses free geographic data to directly address globally framed development concerns.</p> ",
      location: {
        center: [32.5944272, 0.3418314],
        zoom: 0,
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
      title: "Gulu City",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOUMsY23DcuAdZ4cWn47nIXVSB6srfpzd-9VCsv=w427-h240-k-no",
      description:
        "Gulu is a city in the Northern Region of Uganda. It is the commercial and administrative centre of Gulu District. The coordinates of the city of Gulu are 2°46'54.0''N 32°17'57.0 ''E. The distance from Gulu to Kampala, Uganda's capital and largest city, is approximately 333 kilometres by road. ",

      location: {
        center: [32.2529403, 2.7754066],
        zoom: 8.5,
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
      title: "Lira City",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipP8hW-Uu7VNWrO65AVRmitfIq6ZByteVzFkKjF3=w408-h306-k-no",
      description:
        "Lira is a city in the Northern Region of Uganda. It is the main municipal, administrative, and commercial centre of Lira District.",
      location: {
        center: [32.8523878, 2.2580829],
        zoom: 12.52,
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
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Masaka City",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMHAdPwpU_FiV-CAC2wcwOziz_RqOarpgGynnyN=w426-h240-k-no",
      description:
        "Masaka is approximately 132 kilometres (82 mi) to the south-west of Kampala on the highway to Mbarara.[4] The city is close to the Equator. The coordinates of Masaka are 0°20'28.0''S, 31°44'10.0''E (Latitude:-0.341111; Longitude:31.736111). Masaka lies at an average elevation of 1,288 metres (4,226 ft) above sea level.",
      location: {
        center: [31.717877, -0.3379779],
        zoom: 12.52,
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
