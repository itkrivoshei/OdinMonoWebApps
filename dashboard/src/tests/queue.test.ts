const Queue = require('../../public/exs/queue');

describe('Queue', () => {
  test('should enqueue and dequeue items correctly', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);

    queue.enqueue(4);

    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
  });

  test('should return true for isEmpty when the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return false for isEmpty when the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
