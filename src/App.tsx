import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Input,
  Form,
  FormInput,
  FormSection,
  FormActions,
  useForm,
  Modal,
  ModalFooter,
  Badge,
  Tag,
  AnimatedBackground,
  AnimatedBackgroundPresets,
  GradientText,
  AnimatedGradientText,
  Container,
  Section,
  GridContainer,
  FlexContainer
} from './components/ui';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Form submitted! Check console for data.');
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <>
      <AnimatedBackground {...AnimatedBackgroundPresets.network} />
      
      <Section spacing="xl">
        <Container maxWidth="4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <AnimatedGradientText
              gradient="rainbow"
              animationType="wave"
              className="text-6xl font-bold mb-4"
              as="h1"
            >
              UI Components Library
            </AnimatedGradientText>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A collection of beautiful, reusable UI components built with React and TypeScript
            </p>
          </div>

          {/* Buttons Section */}
          <Card className="mb-8">
            <CardHeader title="Buttons" subtitle="Various button styles and states" />
            <CardContent>
              <div className="space-y-4">
                <FlexContainer gap="md" wrap>
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                  <Button variant="success">Success Button</Button>
                </FlexContainer>
                
                <FlexContainer gap="md" wrap>
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </FlexContainer>
                
                <FlexContainer gap="md">
                  <Button loading>Loading...</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width Button</Button>
                </FlexContainer>
              </div>
            </CardContent>
          </Card>

          {/* Forms Section */}
          <Card glassMorphism blur="lg" className="mb-8">
            <CardHeader title="Form Components" subtitle="Form inputs with React Hook Form integration" />
            <CardContent>
              <Form form={form} onSubmit={onSubmit}>
                <FormSection>
                  <FormInput
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    rules={{ required: 'Name is required' }}
                  />
                  
                  <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    rules={{ 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    }}
                  />
                  
                  <Input
                    label="Message"
                    placeholder="Enter your message"
                    hint="This is a standalone input component"
                  />
                </FormSection>
                
                <FormActions>
                  <Button type="button" variant="ghost" onClick={() => form.reset()}>
                    Reset
                  </Button>
                  <Button type="submit">Submit Form</Button>
                </FormActions>
              </Form>
            </CardContent>
          </Card>

          {/* Badges and Tags */}
          <GridContainer cols={{ default: 1, md: 2 }} gap="lg" className="mb-8">
            <Card>
              <CardHeader title="Badges" />
              <CardContent>
                <FlexContainer gap="sm" wrap>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success" dot>Active</Badge>
                  <Badge variant="danger">Error</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info" size="xs">New</Badge>
                </FlexContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title="Tags" />
              <CardContent>
                <FlexContainer gap="sm" wrap>
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      removable
                      onRemove={() => removeTag(index)}
                      color="primary"
                    >
                      {tag}
                    </Tag>
                  ))}
                  <Tag outlined color="gray">+ Add Tag</Tag>
                </FlexContainer>
              </CardContent>
            </Card>
          </GridContainer>

          {/* Modal Demo */}
          <Card hover className="mb-8">
            <CardHeader 
              title="Modal/Dialog" 
              subtitle="Click the button to open a modal dialog"
            />
            <CardFooter>
              <Button onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
            </CardFooter>
          </Card>

          {/* Gradient Text Examples */}
          <Card glassMorphism className="mb-8">
            <CardHeader title="Gradient Text" />
            <CardContent className="space-y-4">
              <GradientText gradient="primary" className="text-2xl font-bold block">
                Primary Gradient Text
              </GradientText>
              <GradientText gradient="sunset" className="text-2xl font-bold block">
                Sunset Gradient Text
              </GradientText>
              <GradientText gradient="ocean" className="text-2xl font-bold block">
                Ocean Gradient Text
              </GradientText>
              <AnimatedGradientText 
                gradient="rainbow" 
                animationType="shimmer"
                className="text-2xl font-bold block"
              >
                Animated Rainbow Gradient
              </AnimatedGradientText>
            </CardContent>
          </Card>

          {/* Container Examples */}
          <Card>
            <CardHeader 
              title="Container Components" 
              subtitle="Responsive layout containers"
            />
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    GridContainer with 3 columns:
                  </p>
                  <GridContainer cols={{ default: 1, md: 3 }} gap="sm">
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded">Item 1</div>
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded">Item 2</div>
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded">Item 3</div>
                  </GridContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
        description="This is a fully functional modal dialog component"
        size="md"
      >
        <div className="py-4">
          <p className="text-gray-700 dark:text-gray-300">
            This modal supports different sizes, animations, and can be closed by clicking outside or pressing ESC.
          </p>
          <div className="mt-4">
            <Input label="Example Input" placeholder="Type something..." />
          </div>
        </div>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setModalOpen(false)}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;