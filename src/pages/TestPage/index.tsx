import { useTestQuey } from '@/query/useTestQuey'
import { useTestPage } from './hook'
import { TestPageProps } from './types'
import { TestComponent } from '@/components/TestComponent'

export const TestPage = ({ }: TestPageProps) => {
  const { } = useTestPage()
  const {data,error } = useTestQuey()
  
  return (
    <div>
      <TestComponent />
    </div>
  );
}

 
