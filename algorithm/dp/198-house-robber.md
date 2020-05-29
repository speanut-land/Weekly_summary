198-house-robber

题目简述: 小偷计划偷窃沿街房屋. 相邻的房屋在同一晚被小偷闯入,系统自动报警.房屋里存放着若干现金.求小偷不触动警报装置,能够偷窃的最高金额

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 
```

错误思路:

如果从数组第一项到最后一项顺序偷窃,偷一家,跳过一家继续偷.**无法计算**当前能够偷取的最大值.

正确思路:

计算当前项能够偷取的最大值,应该与之前房屋能够获取的最大值比较.需要**一张纸(数组)**记录之前的数据,以此选择偷与不偷. 因为不能够连续两间房间偷取,因此当前房屋的偷取与前两项有关, 前一项偷取的总金额,前两项偷取的总金额.

**状态转移方程**: Math.max(dp[i-1],dp[i-2]+nums[i])

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  let dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[dp.length - 1];
};

```
