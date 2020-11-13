export default {
  template: `
    <div>
      삭제중...
    </div>
  `,
  created() {
    const params = new URL(document.location).searchParams;
    const board = JSON.parse(localStorage.getItem('board'));
    board.items = board.items.filter((item) => {
      return item.no != params.get('no');
    });
    localStorage.setItem('board', JSON.stringify(board));

    alert('삭제가 완료되었습니다.');
    location.href = './list.html';
  },
};
