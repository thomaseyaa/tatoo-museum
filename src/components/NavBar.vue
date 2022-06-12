<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top p-5">
    <div class="container">
      <img class="navbar-brand" src="../assets/logo.png" width="79.61px">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-white" id="navbarResponsive">
        <ul class="navbar-nav ms-auto textRaleway">
          <li class="nav-item">
            <a class="nav-link text-white me-2" href="#">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white me-2" href="#">Histoire</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white me-2" href="#">Evenements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white me-2" href="#">Expositions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white me-2" href="#">Tarif</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white me-4" href="#">Contact</a>
          </li>
        </ul>
        <button class="buttonWhite autoLayout">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;">
            <path d="M14.3684 4.91031L15.3344 5.16913V5.16913L14.3684 4.91031ZM10.7526 18.4049L11.7185 18.6637L10.7526 18.4049ZM3.9911 16.5931L4.95703 16.8519V16.8519L3.9911 16.5931ZM7.60696 3.09858L8.57288 3.35739V3.35739L7.60696 3.09858ZM8.25535 2.72423L7.99653 3.69015L8.25535 2.72423ZM13.9941 4.26191L14.2529 3.29599V3.29599L13.9941 4.26191ZM13.4025 4.65149L9.78666 18.146L11.7185 18.6637L15.3344 5.16913L13.4025 4.65149ZM4.95703 16.8519L8.57288 3.35739L6.64103 2.83976L3.02517 16.3343L4.95703 16.8519ZM7.99653 3.69015L13.7353 5.22784L14.2529 3.29599L8.51417 1.7583L7.99653 3.69015ZM8.57288 3.35739C8.50561 3.60844 8.24757 3.75742 7.99653 3.69015L8.51417 1.7583C7.69828 1.53968 6.85965 2.02387 6.64103 2.83976L8.57288 3.35739ZM6.72479 19.9138C5.39113 19.5565 4.59967 18.1856 4.95703 16.8519L3.02517 16.3343C2.38194 18.7349 3.80656 21.2024 6.20715 21.8457L6.72479 19.9138ZM9.78666 18.146C9.4293 19.4797 8.05846 20.2712 6.72479 19.9138L6.20715 21.8457C8.60775 22.4889 11.0753 21.0643 11.7185 18.6637L9.78666 18.146ZM15.3344 5.16913C15.553 4.35324 15.0688 3.51461 14.2529 3.29599L13.7353 5.22784C13.4842 5.16057 13.3352 4.90253 13.4025 4.65149L15.3344 5.16913Z" fill="white"/>
            <path d="M21.3416 20.9999V21.9999V20.9999ZM7.37097 19.9999C6.81869 19.9999 6.37097 20.4476 6.37097 20.9999C6.37097 21.5522 6.81869 21.9999 7.37097 21.9999L7.37097 19.9999ZM22.871 14.5293C22.871 13.977 22.4233 13.5293 21.871 13.5293C21.3187 13.5293 20.871 13.977 20.871 14.5293H22.871ZM21.3416 19.9999L7.37097 19.9999L7.37097 21.9999L21.3416 21.9999V19.9999ZM20.871 14.5293V20.4705H22.871V14.5293H20.871ZM21.3416 21.9999C22.1862 21.9999 22.871 21.3151 22.871 20.4705H20.871C20.871 20.2106 21.0817 19.9999 21.3416 19.9999V21.9999Z" fill="white"/>
            <path d="M7.37097 17.6H7.37297V17.602H7.37097V17.6Z" stroke="white" stroke-width="3.88571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5127 14.7671L21.0901 13.8607L21.5127 14.7671ZM8.42843 19.765C7.92789 19.9984 7.71133 20.5934 7.94474 21.0939C8.17814 21.5944 8.77312 21.811 9.27366 21.5776L8.42843 19.765ZM19.2579 8.67897L18.3516 9.10159V9.10159L19.2579 8.67897ZM21.7688 14.0635L22.6751 13.6409V13.6409L21.7688 14.0635ZM18.5544 8.4229L18.1318 7.51659V7.51659L18.5544 8.4229ZM12.4784 10.1528C11.9779 10.3862 11.7613 10.9812 11.9947 11.4817C12.2281 11.9823 12.8231 12.1988 13.3236 11.9654L12.4784 10.1528ZM21.0901 13.8607L8.42843 19.765L9.27366 21.5776L21.9353 15.6734L21.0901 13.8607ZM18.3516 9.10159L20.8625 14.4861L22.6751 13.6409L20.1642 8.25635L18.3516 9.10159ZM18.977 9.3292C18.7414 9.43904 18.4614 9.33713 18.3516 9.10159L20.1642 8.25635C19.8073 7.49082 18.8973 7.15962 18.1318 7.51659L18.977 9.3292ZM21.9353 15.6734C22.7009 15.3164 23.032 14.4064 22.6751 13.6409L20.8625 14.4861C20.7526 14.2506 20.8545 13.9706 21.0901 13.8607L21.9353 15.6734ZM13.3236 11.9654L18.977 9.3292L18.1318 7.51659L12.4784 10.1528L13.3236 11.9654Z" fill="white"/>
          </svg>
          <span> Billeterie</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #202020;
  }
  .buttonWhite  {
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 20px;
    border: 1px solid;
    cursor: pointer;
    line-height: 1;
    width: 171px;
    height: 50px;
    color: #FFFFFF;
    background-color: #202020;
  }
  .autoLayout{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 35px;
  }
  .textRaleway {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 21.33px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.15px;
    text-transform: uppercase;
    color: white;
  }
</style>
