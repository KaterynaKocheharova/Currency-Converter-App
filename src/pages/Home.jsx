import { Container, ExchangeForm, Heading, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../redux/selectors';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);
  console.log(exchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {isLoading && <Loader />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
