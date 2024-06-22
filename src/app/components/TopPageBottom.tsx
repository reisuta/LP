'use client'
import styled from 'styled-components';
import Link from 'next/link';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background: white;
  position: relative;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: black;
  color: blue;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  width: 100%;
  background: #330033;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0.5rem 0;
  color: gray;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 1rem;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #00cc99;
`;

const CardText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #555;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: #660033;
  color: white;
  width: 100%;
  text-align: center;
`;

const Button = styled(Link)`
  background-color: #000;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: #333;
  color: white;
  width: 100%;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: gray;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: gray;
`;

const FooterButton = styled(Button)`
  background-color: #00cc99;
  &:hover {
    background-color: #009977;
  }
`;

const SvgIcon = styled.svg`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  fill: #00cc99;
`;

export default function HomePage() {
  return (
    <PageContainer>
      <HeaderContainer>
        <h1>文豪性格診断の流れ</h1>
      </HeaderContainer>

      <MainContent>
        <Card>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </SvgIcon>
          <CardTitle>フォーム回答</CardTitle>
          <CardText>20問前後のご質問</CardText>
          <CardText>独創性・変人度・常識感などから、一つの目安としての診断結果をご提供します</CardText>
        </Card>

        <Card>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 2H4v20l8-8 8 8V2z"/>
          </SvgIcon>
          <CardTitle>メールとその場で結果確認</CardTitle>
          <CardText>回答完了画面とメールで結果をご確認いただけます。</CardText>
        </Card>

        <Card>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </SvgIcon>
          <CardTitle>文豪タイプごとの最適学習プラン</CardTitle>
          <CardText>文豪タイプに応じて最適の学習プランを提案し、学習管理のポイントに加算します</CardText>
        </Card>
      </MainContent>

      <FormSection>
        <Subtitle>診断に際し会員登録すると自分の学習記録を文豪種別として保存できます</Subtitle>
        <Button href="/diagnosis">診断する</Button>
      </FormSection>

      <FooterSection>
        <FooterTitle>サイト運営者について</FooterTitle>
        <FooterText>Webエンジニア | 20代中盤 | 大学時代はGmailすら知らないIT音痴でプログラミングとは無縁の生活を送る</FooterText>
        <FooterText>→ 独学でプログラミングを学ぶ → Web系受託開発企業にエンジニアとして就職 →</FooterText>
        <FooterText>Web系自社サービス企業に転職 | 実務未経験の頃からVimを愛好しており、仕事でもプライベートでも開発はVimとTmuxを使っているので、VSCodeに疎いのが最近の悩み。何だかんだでやっぱりRubyが好き。</FooterText>
        <FooterButton href="about">もっと詳しく</FooterButton>
      </FooterSection>
    </PageContainer>
  );
}
