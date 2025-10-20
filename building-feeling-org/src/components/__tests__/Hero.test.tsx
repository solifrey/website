import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Hero from '../Hero'

expect.extend(toHaveNoViolations)

const mockData = {
  title: "What if your organisation could sense change before it hits the balance sheet?",
  subtitle: "I help leadership teams turn complexity from a threat into an advantage."
}

describe('Hero Component', () => {
  it('renders the hero title and subtitle', () => {
    render(<Hero data={mockData} />)
    
    expect(screen.getByText(mockData.title)).toBeInTheDocument()
    expect(screen.getByText(mockData.subtitle)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero data={mockData} />)
    
    expect(screen.getByText('Explore how we can work together')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Hero data={mockData} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
