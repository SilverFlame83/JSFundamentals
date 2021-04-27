function solve(input) {
    let file = input.substring(input.lastIndexOf('\\') + 1);
    let fileName = file.substring(0,file.lastIndexOf('.'));
    let ext = file.substring(file.lastIndexOf('.') + 1);
    

    return `File name: ${fileName}` + '\n' +`File extension: ${ext}`
}

console.log(solve('C:\\Projects\\Data-Structures\\LinkedList.cs'));