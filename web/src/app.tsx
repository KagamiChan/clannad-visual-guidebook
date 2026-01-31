import { FC } from 'react'
import backgroundImage from './assets/rapeseed.jpg'
import styled from 'styled-components'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

import { getDayIndex } from './load-generated-data'
import { DayRoute } from './routes/day-route'

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
  background-color: rgba(255, 255, 255, 0.4);
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
  const dayIndex = getDayIndex()
  const defaultDayKey = dayIndex[0]?.dayKey

  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <Backdrop />
        <AppContainer>
          <SideBar>
            {dayIndex.map((day) => (
              <Entry key={day.dayKey} to={`/day/${day.dayKey}`}>
                {day.label}
              </Entry>
            ))}
          </SideBar>
          <Routes>
            {defaultDayKey ? (
              <Route path="/" element={<Navigate to={`/day/${defaultDayKey}`} replace />} />
            ) : (
              <Route path="/" element={<div style={{ padding: 16 }}>No day index found.</div>} />
            )}
            <Route path="/day/:dayKey" element={<DayRoute />} />
            <Route
              path="*"
              element={<Navigate to={defaultDayKey ? `/day/${defaultDayKey}` : '/'} replace />}
            />
          </Routes>
        </AppContainer>
      </div>
    </BrowserRouter>
  )
}

// preload elk
import(`./components/charting/flow-chart`)
