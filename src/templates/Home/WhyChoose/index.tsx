import C from "./const";
import * as S from "./styles";

const WhyChoose = () => {
  return (
    <S.WhyChoose>
      <S.Wrapper>
        <S.Img {...C.background} />
        <S.Article>
          <S.Title>{C.title}</S.Title>
          <S.List>
            {C.list.item.map((i, index) => (
              <S.Item key={index}>
                <S.Icon {...C.list.icon} />
                <S.Content>{i}</S.Content>
              </S.Item>
            ))}
          </S.List>
          <S.Btn {...C.button} />
        </S.Article>
      </S.Wrapper>
    </S.WhyChoose>
  );
};
export default WhyChoose;
