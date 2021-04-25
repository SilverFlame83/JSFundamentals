function condense(nums) {
    if (nums.length === 1) {
        console.log(nums[0]);
        return;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = Number(nums[i]) + Number(nums[i + 1]);
    }
    nums.pop();
    condense(nums);
}

condense([2,10,3]);
