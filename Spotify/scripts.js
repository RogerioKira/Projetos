document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        {name:'Audioslave', Image:'./img/Audioslave.png'},
        {name:'Eminem', Image:'./img/Eminem.jpg'},
        {name:'Jonnhy Cash', Image:'./img/Jonnhy Cash.jpg'},
        {name:'Nujabes', Image:'./img/Nujabes.png'},
        {name:'System of a Down', Image:'./img/System of a Down.png'},
        {name:'Tim Maia', Image:'./img/Tim Maia.png'}
    ];

    const albumsData =[
        {name: 'Diamond Eyes', artist:'Deaftones', Image:'./img/Diamond Eyes.jpg'},
        {name: 'Follow the Leader', artist:'Korn', Image:'./img/Follow the Leader.png'},
        {name: 'From mars to sirius', artist:'Gojira', Image:'./img/From mars to sirius.jpg'},
        {name: 'Hybrid Theory', artist:'Linkin in Park', Image:'./img/Hybrid Theory.jpg'},
        {name: 'Madvillain', artist:'MF Doom', Image:'./img/Madvillain.jpg'},
        {name: 'Nevermind', artist:'Nirvana', Image:'./img/Nevermind.png'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albuns-grid')

    artistsData.forEach(artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML=`
            <img src="${artist.Image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML=`
            <img src="${album.Image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard)
    })


})


