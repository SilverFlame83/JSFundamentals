function gramophone(bandName, nameOfAlbum, song) {
    let rotationTimes = (nameOfAlbum.length * bandName.length) * song.length/2;
    let rotation = Math.ceil(rotationTimes / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
    
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')