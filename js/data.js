/*
돌부처,2
가스라이팅,1
인성쓰레기,0
*/

const qnaList = [
  {
    q: '1. 배고프다. 그때 친구가 간식을 먹는다',
    a: [
      { answer: 'a. 손을 내민다', type: [0] },
      { answer: 'b. 한입만', type: [1] },
      { answer: 'c. 내껀 내가 사서 먹는다', type: [2] },
    ]
  },
  {
    q: '2. 약속을 어떻게 생각하는가',
    a: [
      { answer: 'a. 못지킬수도 있다고 생각한다', type: [1] },
      { answer: 'b. 약속은 신뢰다', type: [2] },
      { answer: 'c. 약속은 깨라고 있는거다', type: [0] },
    ]
  },
  {
    q: '3. 가족,친구에게 말을 끼어들어서 먼저 말한적있는가',
    a: [
      { answer: 'a. 거의 안한다', type: [2] },
      { answer: 'b. 조금 한다', type: [1] },
      { answer: 'c. 매일 한다', type: [0] }
    ]
  },
  {
    q: '4. 다른사람말을 비판한적이 있는가(댓글,오픈카톡,sns포함)',
    a: [
      { answer: 'a. 나랑 안맞으면 즉시한다" ', type: [0] },
      { answer: 'b. 가끔씩 할 수도 있지" ', type: [1] },
      { answer: 'c. 안한다" ', type: [2] },
    ]
  },
  {
    q: '5. 공중도덕,사회적규범을 중요하게 생각하는가',
    a: [
      { answer: 'a. 상관없이 내 멋대로 산다', type: [0] },
      { answer: 'b. 아무생각이 안든다', type: [1]},
      { answer: 'c. 중요하게 생각해 지킬려고 노력한다', type: [2] },
    ]
  },

  {
    q: '6. 불의를 보면 어떻게합니까',
    a: [
      { answer: 'a. 나만 아니면 된다', type: [0] },
      { answer: 'b. 방관한다', type: [2] },
      { answer: 'c. 못참는다', type: [2] },
    ]
  },
  {
    q: '7. 거짓말해도 아무렇지않다',
    a: [
      { answer: 'a. 그렇다', type: [0] },
      { answer: 'b. 양심에 찔린다', type: [1] },
      { answer: 'c. 거짓말 자체를 안한다', type: [2] },
    ]
  },
  {
    q: '8. 의리를 중요하게 생각합니까',
    a: [
      { answer: 'a. 의리를 중요하게 여긴다', type: [2] },
      { answer: 'b. 의리? 그런건 없어', type: [0] },
      { answer: 'c. 나한테 필요하다면 배신할수도 있다', type: [1] },
    ]
  },
  {
    q: '9. 다른사람한테 피해주더라도 원하는것을 얻을것인가',
    a: [
      { answer: 'a. 얻지 않는다', type: [2] },
      { answer: 'b. 어떻게든 얻는다', type: [0] },
      { answer: 'c. 주위사람한테 양해를 구해서 얻는다', type: [1] },
    ]
  },
  {
    q: '10. 자신을 자랑한적이거나 포장한다',
    a: [
      { answer: 'a. 자랑한다', type: [0] },
      { answer: 'b. 사람이 자랑하면서 살수도 있지', type: [1] },
      { answer: 'c. 자랑하지않는다', type: [2] },
    ]
  },
  {
    q: '11. 당신은 어떤유형인가',
    a: [
      { answer: 'a. 장난친적이 많은편이다', type: [0] },
      { answer: 'b. 장난을 하지않지만 같이 웃거나 가만히 있는다', type: [1] },
      { answer: 'c. 장난친적이 없다', type: [2] },
    ]
  },
]

const infoList = [
  {
    name: '와....사람맞아요?<인성쓰레기>',
    desc: '당신 왜 쓰레기인데 사람인척 하고있죠?'
  },
  {
    name: '너가 제일 나빠 <가스라이팅 재능러>',
    desc: '주위사람들한텐 착한이미지, 자기자신한테 악마 가스라이팅, 다른사람의 생각과 느낌을 자기멋대로 만드는것을 가스라이팅이라고해요'
  },
  {
    name: '인생 아직 살만하군요 <돌부처>',
    desc: '아직 우리나라의 이런 위인이 있군요! 감사합니다 당신은 자랑스런 대한민국 국민입니다'
  },
]
