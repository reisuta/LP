'use client'
import styled from 'styled-components';
import Header from '../components/Header'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
  background: black;
  padding: 2rem;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00cc99;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background-color: #009977;
  }
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Content = styled.p`
  margin: 0;
  font-size: 1rem;
  color: white;
`;

const QuestionSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  color: #00cc99;
  margin-bottom: 1rem;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  background: #3333CC;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;

export default function DiagnosticTest() {
  return (
    <>
      <Header />
      <PageContainer>
        <QuestionSection>
          <QuestionTitle>お酒を飲む頻度とそのスタイルを教えてください</QuestionTitle>
          <OptionList>
            <OptionItem>
              <input type="radio" name="skill" value="営業(個人)" />
              <Content>お酒はほとんど飲まない</Content>
            </OptionItem>
            <OptionItem>
              <input type="radio" name="skill" value="" />
              <Content>お酒は週1、2回程度飲む。お酒にあまり強くない、もしくは普通のため、付き合いでちょっと飲む程度</Content>
            </OptionItem>
            <OptionItem>
              <input type="radio" name="skill" value="" />
              <Content>ほとんど毎日飲む。好きな酒のこだわりはなく、手持ち無沙汰で飲んでいる。お酒を飲める人はかっこいいと思う</Content>
            </OptionItem>
            <OptionItem>
              <input type="radio" name="skill" value="" />
              <Content>毎日飲まなきゃやってらんない。酒の味が大好きで、仲間と飲むのが楽しいから毎日飲む</Content>
            </OptionItem>

            <OptionItem>
              <input type="radio" name="skill" value="" />
              <Content>毎日飲まなきゃやってらんない。たいてい一人で飲む。そして本当は酒はあまり好きじゃない</Content>
            </OptionItem>
          </OptionList>
        </QuestionSection>

        <QuestionSection>
          <QuestionTitle>どの思想に共感しますか？</QuestionTitle>
          <OptionList>
            <OptionItem>
              <input type="checkbox" name="customer" value="" />
              <Content>みな機会において平等であるべきだ。そして、実力があるものこそ上に立つべきだ</Content>
            </OptionItem>

            <OptionItem>
              <input type="checkbox" name="customer" value="" />
              <Content>明るく社交的な人物は優秀であり、暗く内向的な人物は劣等である</Content>
            </OptionItem>

            <OptionItem>
              <input type="checkbox" name="customer" value="" />
              <Content>とにかく分かりやすく役に立ちそうなものを使えばいい。細かいことは考える必要はない</Content>
            </OptionItem>

            <OptionItem>
              <input type="checkbox" name="customer" value="" />
              <Content>何が正しいかなんてわからない。そのため何事も研究が欠かせない</Content>
            </OptionItem>

            <OptionItem>
              <input type="checkbox" name="customer" value="" />
              <Content>思想はある種の趣味で、固有のものだから、共感できる思想はない</Content>
            </OptionItem>
          </OptionList>
        </QuestionSection>

        <QuestionSection>
          <QuestionTitle>世間で言われるところの「常識」についてどう思いますか？</QuestionTitle>
          <OptionList>
            <OptionItem>
              <input type="radio" name="client" value="" />
              <Content>非常識にならないためにも、遵守すべき規範であり、絶対に守らなければならないと思う</Content>
            </OptionItem>

            <OptionItem>
              <input type="radio" name="client" value="" />
              <Content>常識がないやつは、変なやつだと思うので、私は嫌いだ。なお私は常識人です</Content>
            </OptionItem>

            <OptionItem>
              <input type="radio" name="client" value="" />
              <Content>常識の定義がいまいちわからないので、答えかねます</Content>
            </OptionItem>

            <OptionItem>
              <input type="radio" name="client" value="" />
              <Content>「世間の常識では」と説教する人が言う、「常識」は、その人の主観でしかないと思う</Content>
            </OptionItem>

            <OptionItem>
              <input type="radio" name="client" value="" />
              <Content>常識が正しいと信じ込むのは、思考停止だと思う</Content>
            </OptionItem>
          </OptionList>
        </QuestionSection>
        <Button>次の質問へ</Button>
      </PageContainer>
    </>
  );
}
