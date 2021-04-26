function solve(input) {
    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let countOfSongs = input.shift();
    let typeList = input.pop();

    for (let i = 0; i < countOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Songs(type,name,time);
        songs.push(song);
    }
    if (typeList === 'all'){
        songs.forEach((i) => console.log(i.name));
    }else{
        let filtered = songs.filter((i) => i.type === typeList);
        filtered.forEach((i) => console.log(i.name));
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
)