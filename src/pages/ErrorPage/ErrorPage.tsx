import {useNavigate, useRouteError} from 'react-router-dom'
import styled from 'styled-components'
import {urls} from '../../utils/urls'

interface RouteError {
  status: number
  statusText: string
  message: string
}

export const ErrorPage = () => {
  const navigate = useNavigate()
  const error = useRouteError() as RouteError

  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate(urls.home)}>Go back to home</button>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
