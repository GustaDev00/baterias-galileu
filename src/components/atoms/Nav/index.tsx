import * as S from './styles';
import C from './const';
import { FC } from 'react';

const Nav: FC<{ className?: string }> = ({ className }) => {
  return (
    <S.Nav className={className}>
      <S.Menu>
        <S.IconItem>
          <S.ItemLink href="/" title={C.mobile.link.title}>
            {C.mobile.icon()}
          </S.ItemLink>
        </S.IconItem>
        {C.menu.map(({ page, link, children }) => (
          <S.Item key={page}>
            <S.ItemLink href={link} title={page}>
              {page}
            </S.ItemLink>
            {!!children.length && <></>}
          </S.Item>
        ))}
      </S.Menu>
    </S.Nav>
  );
};
export default Nav;
