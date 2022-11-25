tsParticles.load("tsParticles", {
    fpsLimit: 60,
    backgroundMode: {
      enable: true
    },
    responsive: [{
        maxWidth: 600,
        options: {
          particles: {
            number: {limit: 40},
          },
        }
      }],
    particles: {
      number:{
        value:150
      },
      color: {
        value: "#ffff"
      },
      links: {
        color: "#ffff",
        enable: true
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 1
        }
      },
      opacity: {
        value: 1,
        random: {
          enable: true,
          minimumValue: 0.5
        }
      }
    }
  });