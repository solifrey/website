import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import PainCard from '../PainCard'

expect.extend(toHaveNoViolations)

const mockProps = {
  title: "You're flying through fog with yesterday's dashboard.",
  description: "The numbers look solid, the KPIs are green — yet something still feels off.",
  illustrationKey: "fog-dashboard",
  index: 0
}

describe('PainCard Component', () => {
  it('renders the pain point title and description', () => {
    render(<PainCard {...mockProps} />)
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })

  it('renders the correct illustration for fog-dashboard', () => {
    render(<PainCard {...mockProps} />)
    
    // Check for the dashboard emoji
    expect(screen.getByText('📊')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<PainCard {...mockProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
