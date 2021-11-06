<template>
  <div class="pb-12 pt-4 mx-8 divide-y">
    <div class=" grid lg:grid-cols-6 gap-2 py-4 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-6">
      <div class="bg-white rounded-lg p-4 h-28 flex justify-center flex-col hover:bg-gray-200 cursor-pointer"
           v-for="category in data.categories"
           :key="category.id">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-8 w-8"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
        <h2 class="text-md font-medium pt-2">{{ category.title }}</h2>
      </div>
    </div>

    <div class="py-4">
      <h2 class="text-sm font-black">热门视频</h2>

      <div class="flex">
        <div class="py-4 space-y-4 xl:w-2/3 md:w-full">
          <div class="flex items-start justify-start cursor-pointer"
               v-for="video in data.videos"
               :key="video.id">
            <div class="w-64 h-36 bg-blue-400 flex-shrink-0"></div>
            <div class="ml-4">
              <h2 class="text-xl ">{{ video.title }}</h2>
              <div class="text-xs text-gray-600 mt-1 flex space-x-2">
                <p>{{ video.channel }}</p>
                <p>{{ video.view_count }} 次观看 · {{ video.created_at }}</p>
              </div>
              <div class="text-xs text-gray-600 mt-2 overflow-ellipsis">
                {{ video.introduction }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

const data = {
  categories: [
    {
      id: 1,
      title: '时下流行',
    },
    {
      id: 2,
      title: '音乐',
    },
    {
      id: 3,
      title: '电影节目',
    },
    {
      id: 4,
      title: '直播',
    },
    {
      id: 5,
      title: '游戏',
    },
    {
      id: 6,
      title: '新闻',
    },
    {
      id: 7,
      title: '体育',
    },
    {
      id: 8,
      title: '学习',
    },
  ],
  videos: [
    {
      id: 1,
      title: '电视剧 何以笙箫默 My Sunshine 031 钟汉良 唐嫣',
      cover:
        'https://cdn.learnku.com/uploads/images/201802/28/1/Jk8mC7SGI5.jpg!/both/300x300',
      channel: '何以笙箫默剧组',
      view_count: 67868,
      created_at: '6天前',
      introduction: '大学时代的赵默笙（唐嫣饰）对C大法学系大才子何以琛（钟汉良饰）一见倾心，开朗直率的她“死缠烂打”地倒追，与众不同的方式吸引了何以琛的目光，一段纯纯的校园爱情悄悄滋生。然而何以琛寄养家庭的妹妹何以玫（菅韧姿饰），鼓起勇气向赵默笙宣战。当赵默笙去找何以琛证实，没想到竟然得到何以琛冷酷的回应。误以为何以琛和何以玫在一起的赵默笙，落寞地服从父亲的安排，前往美国深造。'
    },
    {
      id: 2,
      title: '天书奇谭 (1983)',
      cover:
        'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2700138245.webp',
      channel: '豆瓣电影',
      view_count: 67868,
      created_at: '6天前',
      introduction: '天庭有珍奇书籍“天书”，被锁在石龛门里三千年。看守天书的袁公对天书的内容好奇不已，他乘无人之际，偷偷拿出观看。原来，天书上记录了一百〇八条法术，袁公偷偷下凡，把天书上的内容刻在石壁上。但本意造福人类的袁公此举却触犯了天条，遭到了玉帝的惩罚。'
    },
    {
      id: 1,
      title: '驾驶我的车 ドライブ・マイ・カー (2021)',
      cover:
        'https://cdn.learnku.com/uploads/images/201802/28/1/Jk8mC7SGI5.jpg!/both/300x300',
      channel: '豆瓣电影',
      view_count: 67868,
      created_at: '6天前',
      introduction: '舞台剧演员家福（60岁左右）明明知道同为演员的妻子和同剧男演员定期幽会，却假装不知，在世人面前扮演着恩爱夫妻。妻子去世后，他雇佣了一位女性司机渡利。相处中，他开始逐渐和渡利交流自己的内心世界，追问是否去世的妻子非和“那个男人”保持关系不可。'
    },
    {
      id: 3,
      title: '沙丘 Dune (2021)',
      cover:
        'https://cdn.learnku.com/uploads/images/201802/28/1/Jk8mC7SGI5.jpg!/both/300x300',
      channel: '豆瓣电影',
      view_count: 67868,
      created_at: '6天前',
      introduction: '电影《沙丘》为观众呈现了一段神秘而感人至深的英雄之旅。天赋异禀的少年保罗·厄崔迪被命运指引，为了保卫自己的家族和人民，决心前往浩瀚宇宙间最危险的星球，开启一场惊心动魄的冒险。与此同时，各路势力为了抢夺这颗星球上一种能够释放人类最大潜力的珍贵资源而纷纷加入战场。最终，唯有那些能够战胜内心恐惧的人才能生存下去。'
    },
    {
      id: 4,
      title: '摩加迪沙 모가디슈 (2021)',
      cover:
        'https://cdn.learnku.com/uploads/images/201802/28/1/Jk8mC7SGI5.jpg!/both/300x300',
      channel: '豆瓣电影',
      view_count: 67868,
      created_at: '6天前',
      introduction: '《逃离》是以90年代索马里内战中被孤立的韩朝大使馆的公关人员生死存亡的逃离事件为主题的电影。以韩国外交史上空前绝后的真实故事为基础。'
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default {
  setup () {
    const open = ref(false)

    return {
      data,
      open,
    }
  },
}
</script>
