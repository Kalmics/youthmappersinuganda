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
  title: "African Digital Access Initiative(ADAI)",
  subtitle: "Promoting ICT education in schools through Mapping ",
  byline: "",
  footer:
    'Created by <a href="https://mapuganda.org" target="_blank">OpenstreetMap Uganda</a>.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "OpenStreetMap in Schools",
      image:
        "https://stories.hotosm.org/openstreetmap-in-schools/assets/bk9pZS0QU9/fzn4wjaxeaauox6-2048x1365.jpeg",
      description:
        "<p>The 'OpenStreetMap in Schools' project looks at introducing OpenStreetMap and open mapping techniques in schools to bolster the learning of geography while increasing the uptake of STEM education in schools.</p> <p>OSM Uganda will execute the project in 4 districts: Kisoro, Terego, Arua City, and Arua district, located in the South Western and West Nile regions of Uganda. Building on the OpenStreetMap in Schools pilot training that OpenStreetMap Uganda and Humanitarian OpenStreetMap Team (HOT) carried out in 2018, OpenStreetMap Uganda plans to revitalize these activities across 8 schools with plans to scale up the project each year. The OpenStreetMap in Schools project is targeting 200 teachers and 5,000 students across these secondary school institutions.</p> ",
      location: {
        center: [32.5944272, 0.3418314],
        zoom: 8.5,
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
