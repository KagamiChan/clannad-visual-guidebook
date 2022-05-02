import { FC, lazy, Suspense } from 'react'
import _ from 'lodash'
import { loadPageData } from './load-page-data'
import { pageDefinitions } from './page-definitions'
import backgroundImage from './assets/rapeseed.jpg'
import styled from 'styled-components'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.3; */
`

const Backdrop = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  height: 100vh;
  position: fixed;
  left: 12rem;
  width: calc(100vw - 12rem);
  top: 0;
  z-index: -1;
`

const AppContainer = styled.div`
  display: flex;
`

const SideBar = styled.div`
  width: 18rem;
  padding-top: 8rem;
`

const Entry = styled(Link)`
  margin-left: 7rem;
  width: 10rem;
  background-color: #f7c242;
  margin-bottom: 2rem;
  padding: 0.25rem 0;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 4px;

  :hover {
    transform: translateX(-8px);
  }
`

export const App: FC<any> = () => {
  // console.log(layoutedNodes, maxWidth)

  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <Backdrop />
        <AppContainer>
          <SideBar>
            {pageDefinitions.map((page, index) => (
              <Entry key={page.id} to={`/p/${page.id}`}>
                {page.name}
              </Entry>
            ))}
          </SideBar>
          <Routes>
            {pageDefinitions.map((page) => {
              const Page = lazy(async () => {
                const { FlowChart } = await import(`./components/charting/flow-chart`)
                const { nodes, edges } = await loadPageData(page)

                return {
                  default: () => <FlowChart nodes={nodes} edges={edges} />,
                }
              })
              return (
                <Route
                  key={page.id}
                  path={`/p/${page.id}`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Page />
                    </Suspense>
                  }
                />
              )
            })}
          </Routes>
        </AppContainer>
      </div>
    </BrowserRouter>
  )
}
