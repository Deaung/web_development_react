export default function MyForm(){
  // 폼이 제출될 때 호출
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('폼 제출')
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="submit" value = "Submit" />
    </form>
  );
}