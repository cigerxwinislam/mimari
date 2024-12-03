// Bismillahirahmanirahim



import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Demir</span>
          <span className={styles.mongodb}>Mimari</span>
          <span></span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Projeler</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="+90 537 767 53 85"
              type="secondary"
              className={styles.button}
            >
              İletişim
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        </p>

        Mimar Nurullah Demir
      </div>
    </Wrapper>   
  );
};

export default Hero;
