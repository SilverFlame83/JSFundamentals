function cone(radius, height) {
    let volume = (1/3) * Math.PI * radius * radius * height;
    let totalArea =(Math.PI * radius) * (radius + Math.sqrt((radius * radius) + (height * height)));

    console.log(`volume = ${volume} `);
    console.log(`area = ${totalArea}`);
    
}
cone(3, 5);