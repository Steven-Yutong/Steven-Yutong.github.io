function player_onPlay(){
    say('开始', 4000, 9);
//音乐播放
}
function player_onPause(){
//音乐暂停,可能是用户手动或者放完了
}
function player_onEnded(){
//音乐放完了
}
function player_onWaiting(){
    say('网络不太稳定哦', 4000, 9);
//加载中
}
function player_onError(){
//出错
}
function player_onSeeked(){
//进度条跳跃
}
function player_onVolumechange(){
//更改音量
}
function player_onProgress(){
//进度条加载
}
function player_onListSwitch(){
//换歌
}