import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Star, Send } from "lucide-react";

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState("general");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const feedbackTypes = [
    { value: "general", label: "General Feedback" },
    { value: "technical", label: "Technical Issues" },
    { value: "academic", label: "Academic Support" },
    { value: "faculty", label: "Faculty Feedback" },
    { value: "facilities", label: "Campus Facilities" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        feedbackType,
        rating,
        feedbackText,
        timestamp: new Date().toISOString(),
        studentId: "ST12345" // This would come from your auth context in a real app
      });
      
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFeedbackType("general");
        setRating(0);
        setFeedbackText("");
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleReset = () => {
    setFeedbackType("general");
    setRating(0);
    setFeedbackText("");
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white py-3">
              <h4 className="mb-0">Student Feedback Form</h4>
              <p className="text-white-50 mb-0">
                Help us improve SVIT College services
              </p>
            </Card.Header>
            <Card.Body className="p-4">
              {submitted ? (
                <Alert variant="success" className="mb-0">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div className="bg-success bg-opacity-25 p-3 rounded-circle">
                        <Send className="text-success" size={24} />
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Thank You for Your Feedback!</h5>
                      <p className="mb-0">
                        Your feedback has been submitted successfully. We appreciate your input.
                      </p>
                    </div>
                  </div>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Feedback Category</Form.Label>
                    <Form.Select 
                      value={feedbackType}
                      onChange={(e) => setFeedbackType(e.target.value)}
                      className="form-select-lg"
                    >
                      {feedbackTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Rating</Form.Label>
                    <div className="d-flex align-items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          <Star
                            size={32}
                            fill={star <= (hoverRating || rating) ? "#ffc107" : "none"}
                            color={star <= (hoverRating || rating) ? "#ffc107" : "#6c757d"}
                          />
                        </div>
                      ))}
                      <span className="ms-3 text-muted">
                        {rating > 0 ? `${rating} out of 5` : "Select rating"}
                      </span>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Please share your thoughts, suggestions or concerns..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="border-secondary-subtle"
                    />
                  </Form.Group>

                  <div className="d-flex gap-3">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="px-4 py-2"
                      disabled={loading || rating === 0 || !feedbackText.trim()}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Feedback"
                      )}
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      type="button" 
                      className="px-4 py-2"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;