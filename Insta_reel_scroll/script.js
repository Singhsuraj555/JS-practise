const reels = [
  {
    ismuted: true,
    username: "rahul_kumar",
    likeCount: 1250,
    isLiked: true,
    commentCount: 120,
    captionVideo: "Morning vibes 🌅",
    userProfile: "https://randomuser.me/api/portraits/men/1.jpg",
    shareCount: 45,
    isFollowed: true,
    video: "./reels/reel_1.mp4"
  },
  {
    ismuted: true,
    username: "aisha_ali",
    likeCount: 3420,
    isLiked: false,
    commentCount: 310,
    captionVideo: "Travel diaries ✈️",
    userProfile: "https://randomuser.me/api/portraits/women/2.jpg",
    shareCount: 98,
    isFollowed: false,
    video: "./reels/reel_2.mp4"
  },
  {
    ismuted: true,
    username: "fitness_aman",
    likeCount: 2890,
    isLiked: true,
    commentCount: 205,
    captionVideo: "No pain no gain 💪",
    userProfile: "https://randomuser.me/api/portraits/men/3.jpg",
    shareCount: 76,
    isFollowed: true,
    video: "./reels/reel_3.mp4"
  },
  {
    ismuted: true,
    username: "foodie_neha",
    likeCount: 4120,
    isLiked: false,
    commentCount: 450,
    captionVideo: "Street food love ❤️",
    userProfile: "https://randomuser.me/api/portraits/women/4.jpg",
    shareCount: 132,
    isFollowed: true,
    video: "./reels/reel_4.mp4"
  },
  {
    ismuted: true,
    username: "tech_suraj",
    likeCount: 980,
    isLiked: true,
    commentCount: 88,
    captionVideo: "Code. Sleep. Repeat. 💻",
    userProfile: "https://randomuser.me/api/portraits/men/5.jpg",
    shareCount: 24,
    isFollowed: false,
    video: "./reels/reel_5.mp4"
  },
  {
    ismuted: true,
    username: "art_by_kiran",
    likeCount: 1560,
    isLiked: false,
    commentCount: 142,
    captionVideo: "Sketching my thoughts ✏️",
    userProfile: "https://randomuser.me/api/portraits/men/6.jpg",
    shareCount: 51,
    isFollowed: true,
    video: "./reels/reel_6.mp4"
  },
  {
    ismuted: true,
    username: "dance_ria",
    likeCount: 5200,
    isLiked: true,
    commentCount: 610,
    captionVideo: "Dance is my therapy 💃",
    userProfile: "https://randomuser.me/api/portraits/women/7.jpg",
    shareCount: 210,
    isFollowed: true,
    video: "./reels/reel_7.mp4"
  },
  {
    ismuted: true,
    username: "nature_love",
    likeCount: 870,
    isLiked: false,
    commentCount: 64,
    captionVideo: "Peace in nature 🌿",
    userProfile: "https://randomuser.me/api/portraits/men/8.jpg",
    shareCount: 19,
    isFollowed: false,
    video: "./reels/reel_8.mp4"
  },
  {
    ismuted: true,
    username: "fashion_diaries",
    likeCount: 2980,
    isLiked: true,
    commentCount: 275,
    captionVideo: "OOTD ✨",
    userProfile: "https://randomuser.me/api/portraits/women/9.jpg",
    shareCount: 89,
    isFollowed: true,
    video: "./reels/reel_9.mp4"
  },
  {
    ismuted: true,
    username: "music_vibes",
    likeCount: 1840,
    isLiked: false,
    commentCount: 190,
    captionVideo: "Feel the rhythm 🎶",
    userProfile: "https://randomuser.me/api/portraits/men/10.jpg",
    shareCount: 67,
    isFollowed: false,
    video: "./reels/reel_10.mp4"
  }
];

var allReels = document.querySelector('.all-reels')


function addData() {
var sum = ''
reels.forEach(function(elem,idx) {
    sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.ismuted ?'muted':''} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                    ${elem.ismuted ?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
            
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.captionVideo}</h3>
                    </div>

                    <div class="right">
                        <div id=${idx} class="like-icon">
                            <h4 class="like">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="commentc-icon">
                            <h4 class="comment"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share-iccon">
                            <h4 class="share"><i class="ri-share-forward-line"></i></h4>
                            <h6>52</h6>
                        </div>
                        <div class="menu-iccon">
                            <h4 class="menu"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click',function(dets){

  if(dets.target.className == 'like-icon'){

    if(!reels[dets.target.id].isLiked){
     reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true 
    }else{
      reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
    }

    addData()
  }

  if(dets.target.className == 'follow'){

    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else{
      reels[dets.target.id].isFollowed = false
    }
    
    addData()
  }

  if(dets.target.className == 'mute'){

    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true
    }else{
      reels[dets.target.id].ismuted = false
    }
    
    addData()
  }
  
})