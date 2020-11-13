export default {
  template: `
      <div>
        삭제중...
      </div>
    `,
  created() {
    const params = new URL(document.location).searchParams;
    axios.delete(`http://localhost:9999/vue/api/board/${params.get('no')}`).then(({ data }) => {
      let msg = '삭제 처리시 문제가 발생했습니다.';
      if (data === 'success') {
        msg = '삭제가 완료되었습니다.';
      }
      alert(msg);
      this.$router.push('/list');
    });
  },
};
