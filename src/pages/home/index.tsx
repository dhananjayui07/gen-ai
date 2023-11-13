import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './home.module.scss';

const Home: React.FC = () => {
	const [textareaContent, setTextareaContent] = useState('');
	const [apiResponse, setApiResponse] = useState();

	const fetchIntent = async (fileContent: string) => {
		// fetch actual response from chatbot
		// for now mocking intent
		let id = 0;
		switch (fileContent) {
			case 'file-1':
				id = 1;
				break;
			case 'file-2':
				id = 2;
				break;
			case 'file-3':
				id = 3;
				break;
			default:
				id = 1;
				break;
		}
		const response = await fetchResponseToQuery(id);
		return response;
	};

	const fetchResponseToQuery = async (id: number) => {
		const rawResponse = await fetch(`http://localhost:3000/intents?id=${id}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		const content = await rawResponse.json();
		console.log({ content });
		return content[0].description;
	};

	const handleShowContentClick = async () => {
		console.log(textareaContent);
		const intent = await fetchIntent(textareaContent);
		setApiResponse(intent);
	};
	return (
		<div>
			<h3 className="fs-5 mb-3">Question</h3>
			<div className="mb-3">
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Row>
							<Col sm={6}>
								<Form.Select className="mb-3" aria-label="Summarize file content">
									<option>Summarize file content</option>
									<option value="2">Get sales prompts from call transcript</option>
									<option value="1">Get marketing subject lines</option>
								</Form.Select>
							</Col>
						</Row>
						{/* <Form.Label>File content</Form.Label> */}
						<div className={`${styles.promptWrap}`}>
							{/* summarize the content of the call */}
							<Form.Control
								className={`${styles.textareaControl}`}
								onChange={(e) => setTextareaContent(e.target.value)}
								as="textarea"
								placeholder="Paste your file content here..."
								rows={4}
							/>
						</div>
					</Form.Group>
					<Button
						onClick={handleShowContentClick}
						variant='warning'
						className="text-nowrap d-inline-flex w-auto align-items-center gap-2 px-3 mt-3"
					>
						Go
						<span className="material-icons">send</span>
					</Button>
				</Form>
			</div>
			<hr />
			<div className={`${styles.responseWrap} mt-4`}>
				<h3 className="fs-5 mb-3">Answer</h3>
				<div>
					<Form.Label>Response</Form.Label>
					<div className={`${styles.responseText}`}>{apiResponse}</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
